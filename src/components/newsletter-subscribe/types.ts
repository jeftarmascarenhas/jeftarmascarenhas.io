export type Props = {
  email?: string
  onSubmit?: (params: NewsletterForm) => void
  title?: string
  showTitle?: boolean
  buttonName?: string
}

export type NewsletterForm = {
  email: string
}
