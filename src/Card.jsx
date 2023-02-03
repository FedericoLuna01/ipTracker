import { Stack, Text } from "@chakra-ui/react"

export const Card = ({title, info}) => {
  return (
    <Stack
        w='100%'
    >
        <Text
            color='gray.500'
            casing='uppercase'
            fontSize='sm'
            fontWeight='semibold'
        >
            {title}
        </Text>
        <Text
            color='black'
            fontSize='2xl'
            fontWeight='bold'
        >
            {info}
        </Text>
    </Stack>  
)}
