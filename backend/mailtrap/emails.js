import { mailTrap_client, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplet.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailTrap_client.send({
      from: sender,
      to: recipient,
      subject: "verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("email send successfully", response);
  } catch (error) {
    console.log(`error sending verification mail: ${error}`);
    throw new Error(`error sending verification mail: ${error}`);
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    await mailTrap_client.send({
      from: sender,
      to: recipient,
      template_uuid: "ab628f04-2423-4ef9-b956-90c53b2e5f31",
      template_variables: {
        company_info_name: "Test_Company_info_name",
        name: { name },
        company_info_address: "Test_Company_info_address",
        company_info_city: "Test_Company_info_city",
        company_info_zip_code: "Test_Company_info_zip_code",
        company_info_country: "Test_Company_info_country",
      },
    });
    console.log("email sent successfully", response);
  } catch (error) {
    throw new Error(`error message: ${error}`);
  }
};
