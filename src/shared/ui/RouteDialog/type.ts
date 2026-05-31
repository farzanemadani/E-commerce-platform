export interface RouteDialogProps {
  children: React.ReactNode
  title: string
  description?: string
  onClose?: () => void
  route?: string
}
