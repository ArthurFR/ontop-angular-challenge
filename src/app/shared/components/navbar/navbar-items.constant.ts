export interface NavbarItemsInterface {
    icon: string,
    name: string,
    selected?: boolean,
}

export const NavbarItems: NavbarItemsInterface[] = [
    {
        icon: 'perm_identity',
        name: 'Contracts',
        selected: true,
    },
    {
        icon: 'description',
        name: 'Documents'
    },
    {
        icon: 'credit_card',
        name: 'Payout'
    },
    {
        icon: 'event',
        name: 'Time'
    }
];