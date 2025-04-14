"use client"

import { useEffect, useRef } from "react"

export function DonutChart({ value = 0, percentage = 0 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const centerX = canvas.width / 4
    const centerY = canvas.height / 4
    const radius = Math.min(centerX, centerY) * 0.8

    // Draw background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fillStyle = "#3f3f46" // zinc-700
    ctx.fill()

    // Draw donut hole
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2)
    ctx.fillStyle = "#18181b" // zinc-900
    ctx.fill()

    // Draw progress arc
    const progress = 0.75

    const gradient = ctx.createLinearGradient(
      centerX - radius,
      centerY - radius,
      centerX + radius,
      centerY + radius
    )
    gradient.addColorStop(0, "#4ade80") // green-400
    gradient.addColorStop(1, "#059669") // emerald-600

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress)
    ctx.lineWidth = radius * 0.4
    ctx.strokeStyle = gradient
    ctx.stroke()

    // Glow effect
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress)
    ctx.lineWidth = radius * 0.4 + 4
    ctx.strokeStyle = "rgba(74, 222, 128, 0.2)"
    ctx.globalCompositeOperation = "destination-over"
    ctx.stroke()
    ctx.globalCompositeOperation = "source-over"
  }, [])

  return (
    <div className="relative w-40 h-40">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">{value}T</div>
        <div className="text-emerald-400 text-sm">+{percentage}%</div>
      </div>
    </div>
  )
}
