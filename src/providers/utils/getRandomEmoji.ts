export const getRandomEmoji = (): string[] | [] => {
  const e: string[] = [
    '💻',
    '🏛️',
    '🗽',
    '🗼',
    '🎉',
    '⛩️',
    '🛴',
    '🎁',
    '📎',
    '🔑',
    '✈️',
    '🚀',
    '🛸',
    '🪐',
    '🗿',
    '💣',
    '🧭',
    '💿',
    '📷',
    '⚔️',
    '🛎',
    '🎏',
    '🌝',
    '🐱',
    '🤟🏽',
    '👺',
    '👣',
    '🧠',
    '🥷',
    '🧵',
    '🎓',
    '🦖',
    '🌊',
    '🍩',
    '🍣',
    '🎱',
    '💸',
    '🧋',
  ]
  return typeof window !== 'undefined' ? e.sort((a, b) => 0.5 - Math.random()) : []
}
