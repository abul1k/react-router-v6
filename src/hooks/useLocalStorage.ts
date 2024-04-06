import { useState } from 'react'

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void
type RemoveValue = () => void

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T, SetValue<T>, RemoveValue] => {
  // Get initial value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error)
      return initialValue
    }
  })

  // Update localStorage and state with new value
  const setValue: SetValue<T> = (value) => {
    try {
      // Allow value to be a function to mirror useState API
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save to localStorage
      localStorage.setItem(key, JSON.stringify(valueToStore))
      // Update state
      setStoredValue(valueToStore)
    } catch (error) {
      console.error('Error saving data to localStorage:', error)
    }
  }

  // Remove item from localStorage and reset state
  const removeValue: RemoveValue = () => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing data from localStorage:', error)
    }
  }

  return [storedValue, setValue, removeValue]
}
