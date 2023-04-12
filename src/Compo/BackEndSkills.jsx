import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"

export default function BackendSkills(){
    const BackendSkills = [
        {
            id: 1,
            image: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
            title: 'Node.Js'
        },
        {
            id: 2,
            image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
            title: 'MongoDB'
        },
        {
            id: 3,
            image: 'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png',
            title: 'Express.Js'
        }
    ]
    return(
        <> 
        <SimpleGrid columns={[3, 3, 3, 3]} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' rowGap='15px'>
                        {BackendSkills.map((elem) => {
                            return <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} key={elem.id}>
                            <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto' src={elem.image}shadow='lg' />
                            <Text textAlign='center' mt={{base : '10px', lg : '15px'}}>{elem.title}</Text>
                        </Box>
                        })}
                    </SimpleGrid>
        </>
    )
}