export as namespace slp

export type User = {
  id: string
  username: string
  password: string
  age?: number
}

export type Player = {
  id: string
  isPlaying: boolean
  playlist: Playlist
  volume: number
}

export type Rating = {
  score: 1 | 2 | 3 | 4 | 5
}

export type Playlist = {
  id: string
  title: string
  songs: Song[]
  runtime: number
  rating: Rating
}

export type Song = {
  id: string
  title: string
  artist: Artist
  runtime: number
  rating: Rating
}

export type Release = {
  id: string
  title: string
  artist: Artist
  artwork: Artwork
  songs: Song[]
  rating: Rating
  runtime: number
}

export type Artwork = {
  id: string
  path: string
}

export type Artist = {
  id: string
  name: string
  songs: Song[]
  releases: Release[]
}