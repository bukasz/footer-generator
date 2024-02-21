<template>
  <div style="font-family: Arial, Helvetica, sans-serif">
    <p style="font-size: 14px">
      Serdecznie pozdrawiam / Best regards / mit freundlichen Grüßen,
    </p>
    <div
      style="height: 40px; font-size: 13px; line-height: 15px; margin-top: 30px"
    >
      <img
        src="https://lh3.googleusercontent.com/d/1oQ_11O2zFB0-PdFATqY69KkRkOXYtl0W"
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
      v-if="phone"
      style="height: 40px; font-size: 13px; line-height: 15px; margin-top: 3px"
    >
      <img
        src="https://lh3.googleusercontent.com/d/12tnBZ90fP6HTrKwmqcf8hr2GxCa9vt6I"
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
        src="https://lh3.googleusercontent.com/d/1ahkKJ1uF-YcCtsWWZOSIsJRmAS7b__Us"
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

    <div style="margin: 4px 0 0; overflow: hidden">
      <img
        src="https://lh3.googleusercontent.com/d/1pcY5QzKtEVbCVu4gGqfyAqGfU-q6HKgE"
        style="display: block; min-width: 603px; width: 100%; height: 39px"
      />
      <div
        style="
          color: #fff;
          background: #232427;
          font-family: Inter, Tahoma, sans-serif;
          overflow: hidden;
        "
      >
        <img
          src="https://lh3.googleusercontent.com/d/1IlGgHHbV8lIBoIKC5qstCAH6O0zaEWaU"
          style="
            width: auto;
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
            font-size: 12px;
            line-height: 15px;
          "
        >
          creativestyle Polska Sp. z. o.o.<br />
          ul. Zabłocie 25/L1, 30-701 Kraków, Poland
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
            font-size: 12px;
            line-height: 15px;
          "
        >
          KRS&nbsp;0000331561, Sąd&nbsp;Rejonowy&nbsp;dla&nbsp;Krakowa-<wbr />Śródmieścia, XI&nbsp;Wydział&nbsp;Gospodarczy&nbsp;KRS,<br />
          NIP&nbsp;PL6751416000, Kapitał&nbsp;zakładowy&nbsp;50&nbsp;000&nbsp;zł wpłacony&nbsp;w&nbsp;całości.
        </p>
      </div>
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
