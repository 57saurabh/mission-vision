import React from 'react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import illus1 from "../imgs/mission.png"


const Mission=()=> {
  return (
    <Wrap  justifyContent='center' bg='black'>
   <WrapItem>
    <Center w='45vw' h='50vh' bg='black' color='white'  m='1px' p='5%'>
    <Image boxSize='380px' src={illus1} alt='Dan Abramov' />
    </Center>
  </WrapItem>
  
  <WrapItem>
    <Box w='45vw' h='50vh' bg='black' color='white'  m='1px' p='5%'>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt culpa voluptates maiores, autem vitae voluptatem ipsum voluptatum quis magnam veritatis impedit, odit facilis. Quae neque dolorem molestias debitis libero autem harum eius ducimus nostrum iste, numquam tempora similique placeat ex exercitationem facere modi tempore maxime corrupti fuga quam! Porro alias odit, ipsa necessitatibus harum voluptas repellendus rem ullam doloremque quod, itaque ab exercitationem? Veniam a architecto autem consequuntur quos dignissimos magni ut quod, totam voluptatibus iste? Aliquid et eveniet dignissimos vero sequi esse nesciunt? Quis libero quisquam ex sequi itaque modi ratione maxime sunt asperiores facere. Quasi fugiat harum soluta.</Text>
    </Box>
  </WrapItem>
 

</Wrap>
  )
}

export default Mission