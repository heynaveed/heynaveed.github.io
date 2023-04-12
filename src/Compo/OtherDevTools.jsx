import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"

export default function OtherTools(){
    const Tools = [{
        id: 1,
        image: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
        title: 'Google Analytics'
    },
    {
        id: 2,
        image: 'https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png',
        title: 'Figma'
    },
    ]
    return(
        <>
        <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '50px', md: '80px', lg: '75px' }} letterSpacing={{ base: '3px' }}>OTHER DEV TOOLS</Text>
        <SimpleGrid columns={[2, 2, 2, 2]} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' rowGap='15px'>
                    {Tools.map((elem) => {
                        return <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} key={elem.id}>
                            <Image w={{base : '45px', md : '80px', lg :'60px'}} h={{base : '45px', md : '80px', lg :'60px'}}  m='auto' shadow='lg' src={elem.image} />
                            <Text textAlign='center' mt={{ base: '10px', lg:'20px'}}>{elem.title}</Text>
                        </Box>
                    })}
        </SimpleGrid>
        </>
    )
}