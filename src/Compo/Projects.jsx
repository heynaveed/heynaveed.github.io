import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import {FaExternalLinkAlt} from "react-icons/fa"

export default function Project ( ) {
    return (
        <>
        <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Projects</Text>
         <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'20px'}} direction={{base : 'column-reverse', lg :'column-reverse'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>BrandNav App</Text>
                <Text fontSize={{base : '12px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                A Platform that offers tools for lead generation, data enrichment, and email verification. Businesses can find and connect with potential clients efficiently. 
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >Solely created and implemented verifier tool, blacklist tool, new navbar, sidebar, and pricing page to enhance data accuracy and integrity for BrandNav's platform.</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '5px', md :'5px', lg : '2px'}} letterSpacing={{base : '0px', lg :'2px'}}>Next.Js | react-redux | TypeScript | SCSS</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://app.brandnav.io/dashboard" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><FaExternalLinkAlt/> <Text>LIVE</Text></Flex> </a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="/P2.png" alt="Front Img" borderRadius='8px'/>
            </Box> 
         </Flex>

         <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'20px'}} direction={{base : 'column-reverse', lg :'column-reverse'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>BrandNav Website</Text>
                <Text fontSize={{base : '12px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                Brandnav website contains the landing pages of all the tools. Users can try Data Enrichment and Email Verification as an demo and make an decision to use the app. 
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >Developed comprehensive landing pages for the verifier and blacklist shield tools, improving their accessibility and user understanding.</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '5px', md :'5px', lg : '2px'}} letterSpacing={{base : '0px', lg :'2px'}}>Astro | SCSS | JavaScript</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://brandnav.io/" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><FaExternalLinkAlt/> <Text>LIVE</Text></Flex> </a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="/P1.png" alt="Front Img" borderRadius='8px'/>
            </Box> 
         </Flex>

        <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'20px'}} direction={{base : 'column-reverse', lg :'column-reverse'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>JustBuy</Text>
                <Text fontSize={{base : '12px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                JustBuy is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials. Prabhkiran Singh and Siddharth Munot launched Bewakoof in 2012.
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >A collaborative project built by a team of 5 executed in 5 days</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '5px', md :'5px', lg : '2px'}} letterSpacing={{base : '0px', lg :'2px'}}>REACT | REDUX | CHAKRA UI | NODE | EXPRESS | MONGODB | MONGOOSE | HTML | CSS | JAVASCRIPT</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://sick-dress-4939-otio.vercel.app/" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><FaExternalLinkAlt/> <Text>LIVE</Text></Flex> </a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/SonaliBhalerao/sick-dress-4939" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><AiFillGithub fontSize={"20px"}/> <Text>CODEBASE</Text></Flex> </a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://i.imgur.com/ExLaMF6.png" alt="Front Img" borderRadius='8px'/>
            </Box> 
         </Flex>
         
        <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'20px'}} direction={{base : 'column-reverse', lg :'column-reverse'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>Tripvillas</Text>
                <Text fontSize={{base : '12px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                Tripvillas is one of Asia's largest Holiday Home Rental Companies. The company was founded in late 2009 by Roshan D'Silva when looking 
                for ways to generate additional income from Coffee Plantations owned by his family in India. 
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >A collaborative project built by a team of 4 executed in 5 days</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '5px', md :'5px', lg : '2px'}} letterSpacing={{base : '0px', lg :'2px'}}>HTML | CSS | JAVASCRIPT | REACT | REDUX | CHAKRA UI | ROUTER DOM</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://tripvillas.vercel.app/" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><FaExternalLinkAlt/> <Text>LIVE</Text></Flex> </a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/akashkumar-404/kindly-earthquake-283" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><AiFillGithub fontSize={"20px"}/> <Text>CODEBASE</Text></Flex> </a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://user-images.githubusercontent.com/103996126/198596541-5138961e-965f-496b-9d9f-0b673c2f7d6e.png" alt="Front Img" borderRadius='8px'/>
            </Box> 
         </Flex>




        <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'40px'}} direction={{base : 'column-reverse', lg :'column-reverse'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>Fartech</Text>
                <Text fontSize={{base : '12px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                An British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world.
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >A collaborative project built by a team of 7 executed in 5 days</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '5px', md :'5px', lg : '2px'}} letterSpacing={{base : '0px', lg :'2px'}}>HTML | CSS | JAVASCRIPT</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://celebrated-stardust-10d06f.netlify.app/" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><FaExternalLinkAlt/> <Text>LIVE</Text></Flex></a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/Sumit-Gangwar/Farfetch-Project" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><AiFillGithub fontSize={"20px"}/> <Text>CODEBASE</Text></Flex></a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://i.ibb.co/KV5DhZM/Screenshot-1050.png" alt="Front Img" borderRadius='8px'/>
            </Box> 
         </Flex>



         <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'40px'}} direction={{base : 'column-reverse', lg :'column-reverse'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>Overstock</Text>
                <Text fontSize={{base : '12px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                Overstock is an American internet retailer selling primarily furniture headquartered in Midvale. The company sell home decor, furniture, bedding, and many other goods that are closeout merchandise
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >A collaborative project built by a team of 6 executed in 5 days</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '5px', md :'5px', lg : '2px'}} letterSpacing={{base : '0px', lg :'2px'}}>HTML | CSS | JAVASCRIPT</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://famous-kitten-13c790.netlify.app/" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><FaExternalLinkAlt/> <Text>LIVE</Text></Flex></a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/AnshGirdhar1/Unit-2-Project" target='_blank'><Flex alignItems={"center"} gap={"10px"} border={"1px solid white"} fontSize={"18px"} padding={"5px"} borderRadius={"5px"}><AiFillGithub fontSize={"20px"}/> <Text>CODEBASE</Text></Flex></a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://i.ibb.co/Df5GBXJ/Screenshot-1049.png" alt="Front Img" borderRadius='8px'/>
            </Box> 
         </Flex>
        </>
    )
}