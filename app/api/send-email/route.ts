import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, service, message } = await req.json();

    await resend.emails.send({
      from: "FIG <onboarding@resend.dev>",
      to: ["info@fullyintegratedgroup.com"],
      replyTo: email,
      subject: `New FIG Inquiry — ${service}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
