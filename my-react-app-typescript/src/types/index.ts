export default interface MenuProps {
    name: string
    active: boolean
    child: MenuProps[]
    href: string
    icon: string
    id: number
}
