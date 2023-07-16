import { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'
import sgMail from '@sendgrid/mail'

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext,
) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const defaultRecipient = process.env.DEFAULT_RECIPIENT
  const defaultSender = process.env.DEFAULT_SENDER
  const debugRecipient = process.env.TEST_EMAIL
  const body = JSON.parse(event.body)
  const msg = {
    to: debugRecipient || defaultRecipient,
    from: defaultSender,
    subject: 'Email du Site www.mahilao.org',
    html: `<div>Bonjour,</div>
<div>&nbsp;</div>
<div>Ceci est un message envoyé depuis le site mahilao.org:</div>
<div>&nbsp;</div>
<ul>
\t<li>Nom,Prénom: ${body.name}</li>
\t<li>E-mail: ${body.email}</li>
</ul>

<div>Le Message:</div>
<hr />
<div>&nbsp;</div>
<div>${body.message.replaceAll('\n', '<br/>')}</div>
<hr />
<div>&nbsp;</div>

<div>Salutations,</div>

<div>Site Web de Mahilao</div>
`,
  }
  const data = await sgMail.send(msg)

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}

export { handler }
