import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // 1. Parse request body
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      service,
      message,
    } = body;

    // 2. Basic validation
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // 3. Ensure API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return new Response(
        JSON.stringify({ error: "Server misconfiguration" }),
        { status: 500 }
      );
    }

    // 4. Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 5. Send email
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // SAFE default
      to: ["info@fullyintegratedgroup.com"],
      replyTo: email,
      subject: `New FIG Inquiry — ${service}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 6. Success response
    return Response.json({
      success: true,
      messageId: result.data?.id,
    });

  } catch (error: any) {
    console.error("SEND EMAIL ERROR:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to send email",
      }),
      { status: 500 }
    );
  }
}
