import {
  BellIcon,
  Cog6ToothIcon,
  PhotoIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { RectangleGroupIcon } from "@heroicons/react/20/solid";

export const navigation = [
  { name: "Dashboard", href: "#", icon: RectangleGroupIcon, current: true },
  { name: "Analytics", href: "#", icon: UsersIcon, current: false },
  { name: "Communities", href: "#", icon: UserGroupIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Media", href: "#", icon: PhotoIcon, current: false },
  { name: "Support", href: "#", icon: QuestionMarkCircleIcon, current: false },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
];
export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
