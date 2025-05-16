import { useState, useEffect, useRef } from "react";
import googleApisService from "@/services/googleApis";
import Header from "./Header";
import Form from "./Form";
import FooterPreview from "./FooterPreview";
import Loader from "./Loader";
import AuthorizeButton from "./AuthorizeButton";

const FooterGenerator = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);

  const userId = "me";

  useEffect(() => {
    const loadApis = async () => {
      try {
        await googleApisService().loadGoogleApis();
      } catch (error) {
        setErrorMsg(error.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    loadApis();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setErrorMsg(null);
      setSuccessMsg(null);
    }
  }, [isLoading]);

  const handleAuth = () => {
    window.tokenClient.callback = (resp) => {
      console.log(resp);
      if (resp.error !== undefined) {
        setErrorMsg(resp.error);
        throw resp;
      }
      setIsAuthorized(true);
      getUserEmail();
    };

    const isTokenMissing = window.gapi.client.getToken() === null;

    // Show account chooser & consent dialog when establishing a new session
    window.tokenClient.requestAccessToken({
      prompt: isTokenMissing ? "consent" : "",
    });
  };

  const handleSignout = () => {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken("");
      setIsAuthorized(false);
      setEmailAddress(null);
    }
  };

  const getUserEmail = async () => {
    setIsLoading(true);

    try {
      const profile = await window.gapi.client.gmail.users.getProfile({
        userId,
      });
      setEmailAddress(profile.result.emailAddress);
    } catch (error) {
      setErrorMsg(error.message || "Failed to get email");
    } finally {
      setIsLoading(false);
    }
  };

  const setSignature = async () => {
    if (!footerRef.current?.outerHTML) throw new Error("Footer is empty");

    setIsLoading(true);

    try {
      if (!emailAddress) throw new Error("Email address is missing");

      await window.gapi.client.gmail.users.settings.sendAs.update({
        userId,
        sendAsEmail: emailAddress,
        resource: {
          signature: footerRef.current.outerHTML,
        },
      });

      setSuccessMsg("Signature updated");
    } catch (error) {
      setErrorMsg(error.message || "Failed to update signature");
    } finally {
      setIsLoading(false);
    }
  };

  const initialFormData = {
    name: "",
    surname: "",
    position: "",
    position_alt: "",
    telephone: "",
    more: "",
  };

  const [isFromSelect, setIsFromSelect] = useState(true);
  const [formData, setFormData] = useState(initialFormData);

  const footerRef = useRef(null);

  return (
    <>
      <div className="footer-generator">
        <Header handleAuth={handleAuth} handleSignout={handleSignout} />
        <Form
          initialFormData={initialFormData}
          formData={formData}
          setFormData={setFormData}
          setIsFromSelect={setIsFromSelect}
          setSignature={setSignature}
        />
      </div>

      {errorMsg && (
        <p className="footer-generator__message footer-generator__message--error">
          {errorMsg}
        </p>
      )}
      {successMsg && (
        <p className="footer-generator__message footer-generator__message--success">
          {successMsg}
        </p>
      )}
      <FooterPreview
        ref={footerRef}
        name={formData.name}
        surname={formData.surname}
        telephone={formData.telephone}
        position={isFromSelect ? formData.position : formData.position_alt}
        more={formData.more}
      />
      {isLoading ? (
        <Loader />
      ) : (
        !isAuthorized && <AuthorizeButton handleAuth={handleAuth} />
      )}
    </>
  );
};

export default FooterGenerator;
