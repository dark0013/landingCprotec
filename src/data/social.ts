export type SocialChannel = {
  id: 'facebook' | 'instagram' | 'whatsapp' | 'chat'
  label: string
  icon: string
  href?: string
}

export const socialChannels: SocialChannel[] = [
  { id: 'facebook', label: 'Facebook', icon: '/assets/icons/facebook.png' },
  { id: 'instagram', label: 'Instagram', icon: '/assets/icons/instagram.png' },
  { id: 'whatsapp', label: 'WhatsApp', icon: '/assets/icons/whatsapp.png' },
  { id: 'chat', label: 'Chat', icon: '/assets/icons/chat.png' },
]
