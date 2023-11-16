import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export const FormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  const previewText = `Nuevo email de:${senderEmail}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body>
          <Section>
            <Text className="font-semibold text-base">
              Posible trabajo? suerte te deseo :3
            </Text>
            <Row>
              <Text className="text-sm">Enviado por:</Text>
              <Text className="p-6 bg-[#f2f3f3] border rounded-[4px]">
                {senderEmail}
              </Text>
            </Row>
            <Text className="text-sm">Con el siguiente mensaje:</Text>
            <Text className="text-xs">{message}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default FormEmail;
