<template>
  <div style="font-family: Arial, Helvetica, sans-serif; background: #fff">
    <p style="font-size: 14px">
      Serdecznie pozdrawiam / Best regards / mit freundlichen Grüßen,
    </p>
    <div
      style="height: 40px; font-size: 13px; line-height: 15px; margin-top: 30px"
    >
      <img
        src="https://lh3.googleusercontent.com/d/1JvCWAknaBbivlFfU-YEeloNhs58FpKv2"
        width="40"
        height="40"
        style="float: left; margin-right: 5px"
      />
      <p style="margin: 0; padding-top: 5px; font-weight: bold; color: #000">
        {{ firstName }} {{ lastName }}<br />
      </p>
      <p style="margin: 0; color: #8c8c8c">{{ position }}</p>
    </div>

    <div
      style="height: 40px; font-size: 13px; line-height: 15px; margin-top: 3px"
    >
      <img
        src="https://lh3.googleusercontent.com/d/1WnKLN_Iy4a5VrvUKjxxRdw52FhwG3eH3"
        width="40"
        height="40"
        style="float: left; margin-right: 5px"
      />
      <a
        style="
          display: block;
          margin: 0;
          padding-top: 12.5px;
          text-decoration: none;
          font-weight: bold;
          color: #000;
        "
        :href="`tel:${phone}`"
        >{{ phone }}</a
      >
    </div>

    <div
      style="height: 40px; font-size: 13px; line-height: 15px; margin-top: 3px"
    >
      <img
        src="https://lh3.googleusercontent.com/d/1Wd2SkBr5h_u691uqiLXUr0v_owA65HYD"
        width="40"
        height="40"
        style="float: left; margin-right: 5px"
      />
      <a
        style="
          display: block;
          margin: 0;
          padding-top: 12.5px;
          text-decoration: none;
          font-weight: bold;
          color: #000;
        "
        :href="`mailto:${emailAddress}`"
        >{{ emailAddress }}</a
      >
    </div>

    <div
      style="
        width: 100%;
        margin: 4px 0 0;
        padding: 0;
        color: #fff;
        background: #232427;
        font-family: Inter, Tahoma, sans-serif;
        overflow: hidden;
      "
    >
      <img
        src="https://lh3.googleusercontent.com/d/1UIT-C8CFI6i9a2-0a97t1UhrjcCezckU"
        style="min-width: 500px; width: 100%; height: 39px; font-size: 0"
      />
      <img
        src="https://lh3.googleusercontent.com/d/1rF9LUTv01VQqEMMDVWvPdD2-X2Fp_f5U"
        style="
          width: 130px;
          height: 34px;
          font-size: 0;
          margin-top: 10px;
          padding-left: 25px;
        "
      />
      <p
        style="
          margin: 0;
          padding: 20px 0 0 25px;
          color: #fff;
          font-size: 12px;
          line-height: 15px;
        "
      >
        creativestyle Polska Sp. z. o.o.<br />
        ul. Zabłocie 25/L1,&#8203; 30-701 Kraków, Poland
      </p>
      <a
        style="
          display: block;
          margin: 0;
          padding: 20px 0 20px 25px;
          color: #fff;
          font-size: 12px;
          line-height: 15px;
        "
        href="https://creativestyle.pl"
      >
        creativestyle.pl
      </a>
      <p
        style="
          margin: 0;
          padding: 0 0 25px 25px;
          color: #fff;
          font-size: 12px;
          line-height: 15px;
        "
      >
        KRS 0000331561, Sąd Rejonowy dla Krakowa-<br />Śródmieścia, XI Wydział
        Gospodarczy KRS,<br />
        NIP PL6751416000, Kapitał zakładowy 50 000 zł<br />wpłacony w całości.
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  firstName: String,
  lastName: String,
  position: String,
  phone: String,
  emailAddress: String,
});
</script>
