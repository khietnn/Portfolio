import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Chỉ chạy animation khi người dùng không bật "giảm chuyển động" trong hệ điều hành. */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)'
export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

export { gsap, ScrollTrigger, useGSAP }
