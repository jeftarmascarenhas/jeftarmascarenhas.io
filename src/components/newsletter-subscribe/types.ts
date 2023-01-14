export type Props = {
  email?: string
  onSubmit?: (params: NewsletterForm) => void
  title?: string
  buttonName?: string
}

export type NewsletterForm = {
  email: string
}
