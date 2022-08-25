import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);

  function handleTabIndex(index: number) {
    setTabIndex(index);
    if(index) {
      router.push(`/produtos/two`);
    }
  }

  return (
    <Flex background="white" h="100vh" w="100vw">
      <Tabs tabIndex={tabIndex} onChange={handleTabIndex} w="100%" isFitted>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            One
          </TabPanel>
          <TabPanel>
            two
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Home
