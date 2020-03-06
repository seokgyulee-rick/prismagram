import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-mailgun-transport";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = email => {
  auth: {
    api_key: 'key-1234123412341234',
    domain: 'one of your domain names listed at your https://mailgun.com/app/domains'
  }
}

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "nico@prismagram.com",
    to: adress,
    subject: "Login Secret for Prismagram",
    html: `Hello! Your login secret is ${secret}.<br/> Copy Paste on the app/web`
  };
};
