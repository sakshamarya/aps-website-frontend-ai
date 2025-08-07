import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message, inquiryType } = body

    // Here you would typically:
    // 1. Validate the data
    // 2. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 3. Store the inquiry in a database
    // 4. Send confirmation emails

    // For demo purposes, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      subject,
      message,
      inquiryType,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real implementation, you would integrate with an email service:
    /*
    const emailService = new EmailService()
    await emailService.send({
      to: 'info@aps.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
