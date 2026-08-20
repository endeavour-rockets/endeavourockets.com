export async function POST(request) {
  const formData = await request.formData()

  const payload = {
    name: formData.get('name')?.toString().trim() ?? '',
    email: formData.get('email')?.toString().trim() ?? '',
    organisation: formData.get('organisation')?.toString().trim() ?? '',
    message: formData.get('message')?.toString().trim() ?? ''
  }

  if (!payload.name || !payload.email || !payload.message) {
    return Response.json(
      { ok: false, error: 'Name, email, and message are required.' },
      { status: 400 }
    )
  }

  return Response.json({
    ok: true,
    message: 'Contact form received. Connect this route to email or CRM delivery next.',
    submission: payload
  })
}
