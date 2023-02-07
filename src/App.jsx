import { ChevronRightIcon } from "@chakra-ui/icons"
import { Button, Heading, Input, InputGroup, InputRightElement, Stack, StackDivider, Text } from "@chakra-ui/react"
import { useState } from "react"
import { getInfo } from "./API/getInfo"
import { Card } from "./Card"
import { Mapa } from "./Mapa"

export const App = () => {
  const [ipInput, setIpInput] = useState('')
  const [data, setData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (ipInput === '') return
    const fetchData = await getInfo(ipInput)
    const ubication = await getLocation(fetchData)
    setData({...fetchData, ubication})
    setIpInput('')
  }

  const getLocation = async (fetchData) => {
    if (fetchData.location === undefined) return
    const ubication = `${fetchData.location.region}, ${fetchData.location.country}`
    return ubication
  }

  return (
    <Stack
      h="100vh"
    >
      <Stack
        bgImage='/pattern-bg.png'
        bgRepeat='no-repeat'
        bgSize='cover'
        h='40%'
        w='100%'
        align='center'
        justify='center'
      >
        <Heading
          color='white'
          pb={5}
        >
          IP Adress Tracker
        </Heading>
        <Stack
          as='form'
          w='100%'
          align='center'
          onSubmit={e => handleSubmit(e)}
        >
          <InputGroup
            w='60%'
            size='lg'
          >
            <Input 
              placeholder='Search for any IP address or domain'
              bg='whiteAlpha'
              borderRadius='lg'
              value={ipInput}
              onChange={(e) => setIpInput(e.target.value.trim())}
            />
            <InputRightElement
              children={
              <Button
                bg='black'
                _hover={{bg: 'blackAlpha.800'}}
                borderRadius='lg'
                borderLeftRadius='0'
                h='100%'
                type='submit'
              >
                <ChevronRightIcon color='white' fontWeight='bold' />
              </Button>
              }
            />
          </InputGroup>
        </Stack>
      </Stack>
      <Stack
        align='center'
        mt='0px !important'
      >
        <Stack
          align='center'
          bg='white'
          borderRadius='xl'
          direction='row'
          position='absolute'
          justify='space-evenly'
          gap={5}
          w='80%'
          h={32}
          top='33%'
          p={5}
          zIndex={'2'}
          divider={<StackDivider borderColor='gray.300' />}
        >
          <Card title='IP address' info={data.ip}/>
          <Card title='Location' info={data.ubication}/>
          <Card title='Timezone' info={data.location === undefined ? '' : `UTC ${data.location?.timezone}`}/>
          <Card title='ISP' info={data.isp}/>
        </Stack>
      </Stack>
      <Stack
        w='100%'
        zIndex={'1'}
        mt='0px !important'
      >
        <Mapa location={data.location}/>
      </Stack>
    </Stack>
  )
}
