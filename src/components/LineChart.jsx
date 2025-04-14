"use client"

import { useEffect, useRef } from "react"

export function LineChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const dataPoints = Array.from({ length: 14 }, () => Math.floor(Math.random() * 200) + 100)

    const width = canvas.width / 2
    const height = canvas.height / 2
    const pointSpacing = width / (dataPoints.length - 1)

    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "rgba(74, 222, 128, 0.5)")
    gradient.addColorStop(1, "rgba(74, 222, 128, 0)")

    ctx.beginPath()
    dataPoints.forEach((point, index) => {
      const x = index * pointSpacing
      const y = height - (point / 300) * height * 0.8
      index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    })
    ctx.lineTo(width, height)
    ctx.lineTo(0, height)
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.fill()

    ctx.beginPath()
    dataPoints.forEach((point, index) => {
      const x = index * pointSpacing
      const y = height - (point / 300) * height * 0.8
      index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    })
    ctx.strokeStyle = "#4ade80"
    ctx.lineWidth = 2
    ctx.stroke()

    dataPoints.forEach((point, index) => {
      const x = index * pointSpacing
      const y = height - (point / 300) * height * 0.8
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fillStyle = "#4ade80"
      ctx.fill()
      ctx.strokeStyle = "#18181b"
      ctx.lineWidth = 1
      ctx.stroke()
    })

    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 0.5
    for (let i = 1; i < 4; i++) {
      const y = (height / 4) * i
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }, [])

  return (
    <div className="w-full h-40 relative">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
      <div className="absolute bottom-0 left-0 text-xs text-gray-500">
        {new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div className="absolute bottom-0 right-0 text-xs text-gray-500">
        {new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  )
}

export function BarChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const dataPoints = Array.from({ length: 5 }, () => Math.floor(Math.random() * 80) + 20)

    const width = canvas.width / 2
    const height = canvas.height / 2
    const barWidth = (width / dataPoints.length) * 0.6
    const barSpacing = width / dataPoints.length

    dataPoints.forEach((point, index) => {
      const x = index * barSpacing + barSpacing * 0.2
      const barHeight = (point / 100) * height * 0.8
      const y = height - barHeight

      const gradient = ctx.createLinearGradient(0, y, 0, height)
      gradient.addColorStop(0, "#4ade80")
      gradient.addColorStop(1, "#065f46")

      ctx.beginPath()
      ctx.moveTo(x + barWidth, y + 4)
      ctx.arcTo(x + barWidth, y, x + barWidth - 4, y, 4)
      ctx.lineTo(x + 4, y)
      ctx.arcTo(x, y, x, y + 4, 4)
      ctx.lineTo(x, height)
      ctx.lineTo(x + barWidth, height)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x, y + 10)
      ctx.lineTo(x + 3, y + 10)
      ctx.lineTo(x + 3, height - 10)
      ctx.lineTo(x, height - 10)
      ctx.closePath()
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.fill()
    })

    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 0.5
    for (let i = 1; i < 4; i++) {
      const y = (height / 4) * i
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }, [])

  return (
    <div className="w-full h-32 relative">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
