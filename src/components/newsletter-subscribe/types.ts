export type Props = {
  email?: string
  onSubmit?: (params: NewsletterForm) => void
}

export type NewsletterForm = {
  email: string
}
