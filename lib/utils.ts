import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  faBullhorn,
  faCode,
  faFileContract,
  faGraduationCap,
  faHandshakeSimple,
  faIndustry,
  faLaptop,
  faRocket,
  faUserGroup,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const iconMap: Record<string, IconDefinition> = {
  faBullhorn,
  faCode,
  faFileContract,
  faGraduationCap,
  faHandshakeSimple,
  faIndustry,
  faLaptop,
  faRocket,
  faUserGroup,
};