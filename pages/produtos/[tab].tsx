import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState<number | null>(null);

  function handleTabIndex(index: number) {
    setTabIndex(index);
    if(!index) {
      router.push(`/produtos`);
    }
  }

  useEffect(() => {
    const tab: string = router.query.tab as string;
    if (tab === 'two') {
      setTabIndex(2)
    } else if(tab) {
      router.push('/produtos')
    }
  }, [router]);

  return (
    <Flex background="white" h="100vh" w="100vw">
      {tabIndex ? (
        <Tabs isLazy tabIndex={tabIndex - 1} defaultIndex={tabIndex - 1} onChange={handleTabIndex} w="100%" isFitted>
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
      ) : null}
    </Flex>
  )
}

export default Home
