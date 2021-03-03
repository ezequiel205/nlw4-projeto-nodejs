import nodemailer, { Transporter } from "nodemailer";

import handlebars from 'handlebars'; // Modulo nativo do NodeJS
import fs from 'fs' // Modulo nativo do NodeJS

class SendMailService {
  // Assim que a classe é executada o construtor é logo iniciado/executado

  private client: Transporter
  constructor() {
    nodemailer.createTestAccount().then((account) => {
      let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

    this.client = transporter;
    });
  }

  async execute(to: string, subject: string, variables: object, path: string) {

    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const mailTemplateParse = handlebars.compile(templateFileContent)

    const html = mailTemplateParse(variables)

    const message = await this.client.sendMail({
     to, 
     subject,
     html,
     from: "NPS <noreplay@nps.com.br>"
    });

    console.log('Message sent: %s', message.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();
