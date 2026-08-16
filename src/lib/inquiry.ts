export type InquiryPayload = {
  fullName: string
  workEmail: string
  companyName: string
  projectType?: string
  targetTimeline?: string
  projectOverview?: string
}

export type InquiryResponse =
  | { success: true; message: string }
  | { success: false; error: string }

const apiUrl = import.meta.env.VITE_IRONSTACK_API_URL

export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResponse> {
  if (!apiUrl) {
    return { success: false, error: 'Inquiry service is not configured.' }
  }

  try {
    const response = await fetch(`${apiUrl}/api/inquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = (await response.json()) as InquiryResponse

    if (!result.success) {
      return result
    }

    if (!response.ok) {
      return {
        success: false,
        error: 'Unable to submit your inquiry. Please try again.',
      }
    }

    return result
  } catch {
    return {
      success: false,
      error: 'Unable to reach the inquiry service. Please try again.',
    }
  }
}
