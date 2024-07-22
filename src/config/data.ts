import { title } from 'process'
import Image1 from '../../public/agent.png'
import Image2 from '../../public/buyer.png'
import Image3 from '../../public/merchant.png'

import {
    UserIconRounded,
    BriefcaseIcon,
    UploadIcon
} from '../components/icons/icons'

export const userType = [
    {
        role: "Agent",
        image: Image1,
        content: "Connect clients to amazing businesses, earn generous rewards every time. Be the matchmaker who makes it happen."
    },
    {
        role: "Buyer",
        image: Image2,
        content: "Shop local, score big deals. Uncover the best businesses around you, find what you need, and enjoy in-store shopping convenience."
    },
    {
        role: "Merchant",
        image: Image3,
        content: "Sell affordable and authentic products, gadgets, electronics, food stuffs, house utensils and other products."
    }
]

export const kycsteps = [
    {
        title: "Profile verification",
        content: "Complete your profile verification process for your KYC verification.",
        icon: UserIconRounded
    },
    {
        title: "Employment verification",
        content: "Complete your employment verification process for your KYC verification.",
        icon: BriefcaseIcon
    },
    {
        title: "Upload documents",
        content: "Upload required documents to complete the KYC verification.",
        icon: UploadIcon
    }
]