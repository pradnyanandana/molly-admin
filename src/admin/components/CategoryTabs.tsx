'use client'
import React from 'react'

const categories = [
  { label: 'All', value: '' },
  { label: 'Oxidative Stress', value: 'oxidative-stress' },
  { label: 'Muscle Damage', value: 'muscle-damage' },
  { label: 'Muscle Soreness', value: 'muscle-soreness' },
  { label: 'Inflammation', value: 'inflammation' },
  { label: 'Cortisol', value: 'cortisol' },
  { label: 'Sleep', value: 'sleep' },
  { label: 'Pain', value: 'pain' },
]

function getActiveCategoryFromSearch(): string | null {
  try {
    const params = new URLSearchParams(window.location.search)
    return params.get('where[category][equals]')
  } catch {
    return null
  }
}

function setCategoryInSearch(value?: string) {
  const url = new URL(window.location.href)
  const params = url.searchParams

  if (value && value.length > 0) {
    params.set('where[category][equals]', value)
  } else {
    params.delete('where[category][equals]')
  }

  const newUrl = `${url.pathname}?${params.toString()}`
  window.history.replaceState({}, '', newUrl)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function CategoryTabs() {
  const active = typeof window !== 'undefined' ? getActiveCategoryFromSearch() : ''

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
      {categories.map((cat) => {
        const isActive = (active ?? '') === (cat.value ?? '')
        return (
          <button
            key={cat.value || 'all'}
            onClick={() => setCategoryInSearch(cat.value || '')}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: isActive ? '1px solid #0070f3' : '1px solid #ddd',
              background: isActive ? '#e6f0ff' : 'white',
              cursor: 'pointer',
              fontSize: 13,
            }}
            aria-pressed={isActive}
            type="button"
          >
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}
