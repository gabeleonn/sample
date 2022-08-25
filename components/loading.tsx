import { Center, Spinner } from '@chakra-ui/react'
import type { NextPage } from 'next'

export const Loading: NextPage = () => {
  return (
    <Center h="100%" w="100%">
        <Spinner />
    </Center>
  )
}
