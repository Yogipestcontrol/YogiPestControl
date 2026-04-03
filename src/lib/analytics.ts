declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

// Form submissions
export function trackContactFormSubmit(service?: string) {
  gtag("event", "generate_lead", {
    event_category: "contact_form",
    event_label: service || "general",
    value: 1,
  });
}

export function trackBookingFormSubmit(data: { pestType: string; city: string }) {
  gtag("event", "generate_lead", {
    event_category: "booking_form",
    event_label: `${data.pestType} - ${data.city}`,
    value: 1,
  });
}

// Phone call clicks
export function trackPhoneClick(location: string) {
  gtag("event", "phone_call_click", {
    event_category: "engagement",
    event_label: location,
    value: 1,
  });
}

// CTA button clicks
export function trackBookClick(location: string) {
  gtag("event", "book_inspection_click", {
    event_category: "engagement",
    event_label: location,
  });
}

// Service page views
export function trackServiceView(serviceName: string) {
  gtag("event", "view_service", {
    event_category: "engagement",
    event_label: serviceName,
  });
}

// Quiz completion
export function trackQuizComplete(result: string) {
  gtag("event", "quiz_complete", {
    event_category: "engagement",
    event_label: result,
  });
}
