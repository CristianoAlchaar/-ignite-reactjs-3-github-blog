import React, { useState } from 'react'
import { SearchBarContainer } from './style'

interface SearchBarProps {
  listLength: number
  doNewQuery: (query: string) => void
}

export function SearchBar({ listLength, doNewQuery }: SearchBarProps) {
  const [inputText, setInputText] = useState('')

  function handleInputChange() {
    doNewQuery(inputText)
  }

  return (
    <SearchBarContainer>
      <header>
        <h2>Publicações</h2>
        <span>{listLength}</span>
      </header>
      <input
        type="text"
        placeholder="Pressione &#34;Enter&#34; para realizar uma busca"
        maxLength={50}
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        // ideally handleInputChange would be called onChange, however there is a limit
        // on API calls on github, so will only be called when user press "Enter"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleInputChange()
          }
        }}
      />
    </SearchBarContainer>
  )
}
