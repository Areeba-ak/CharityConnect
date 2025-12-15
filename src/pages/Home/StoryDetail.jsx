import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Chip, LinearProgress } from "@mui/material";

const stories = [
  {
    title: "Kausar – Rebuilding lives",
    status: "completed",
    text: [
      "My name is Kausar and I live in Yousuf Goth, Surjani Town with my three children. Every year during heavy rains, our area gets flooded badly. Dirty rainwater mixes with sewage, the drains overflow, and our homes become unsafe to live in. During one severe flood, we lost most of our belongings while trying to protect our children. Life here is very difficult for us. We face problems like open drains, lack of gas supply, and frequent illnesses caused by unhygienic conditions. I am requesting help so that we can repair our damaged walls, improve the drainage system, and make our home safe again. With support, I hope to protect my children and give them a healthier future.",
    ],
    img: "kausar1.png",
    category: "women",
  },

  {
    title: "Shamshad Bibi",
    status: "completed",
    text: [
      "My name is Shamshad Bibi, and I am a mother of four living in my village. I was raised believing that a woman’s role is limited to her home, but my life changed after facing serious complications during my fourth pregnancy. Many people around me believed my life was not worth saving, but my husband took me to the hospital, and that decision saved me. After surviving this experience, I realized how many women in my community suffer or lose their lives due to lack of proper maternal healthcare and awareness. I am requesting support so I can continue spreading awareness about safe childbirth, family planning, and maternal health. With help, I want to protect other women from facing the same pain and give mothers and children a healthier future."
    ],
    img: "bibi.png",
    category: "women",
  },
  
  {
    title: "Humaira Bachal ",
   text: [
      "My name is Humaira Bachal, and I come from a community where girls are often discouraged from getting an education. Despite facing opposition and financial difficulties, I chose to continue my studies because I believed education could change lives. I started a small street school with only a few children, hoping to give them the opportunities I struggled to access. I am seeking support so I can continue providing quality education to underprivileged children, especially girls. With help, I want to expand learning resources, improve facilities, and reach more families who cannot afford schooling. My goal is to empower children with education so they can break the cycle of poverty and build a better future for themselves and their community."
    ],
    img: "humaira.jpg",
    category: "education",
  },

  {
    title: "Rebuilding Farhan’s Life",
    text: [
      "My name is Farhan, and I live in Liaquatabad. A devastating fire destroyed my small shop, which was the only source of income for my family. Overnight, I lost my livelihood, my savings, and the stability I had worked years to build. With no immediate support and limited resources, I felt completely helpless and unsure how I would provide for my family. I am seeking support to rebuild my business and restore my family’s financial stability. With help, I can purchase essential equipment, restock inventory, and restart my shop. This support will not only allow me to stand on my feet again but also help me regain my confidence and dignity, so I can continue supporting my family and contribute positively to my community."
    ],
    img: "farhan1.jpg",
    category: "health",
  }
];

const StoryDetail = () => {
  const { id } = useParams();
  const story = stories[id];

  if (!story) return <Typography>Story not found</Typography>;

  return (
    <Box sx={{ px: 4, pb: 4, mt: 12 }}>

      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1.5,
            mt: 16
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Story Status
          </Typography>

          <Chip
            label="Completed"
            color="success"
            sx={{ fontWeight: "bold" }}
          />
        </Box>

        <LinearProgress
          variant="determinate"
          value={100}
          sx={{ height: 10, borderRadius: 5 }}
        />
      </Box>

      <Typography variant="h3" fontWeight="bold" mb={4}>
        {story.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <Box sx={{ flex: 1 }}>
          {story.text.map((para, index) => (
            <Typography
              key={index}
              paragraph
              sx={{ fontSize: "1.05rem", lineHeight: 1.9 }}
            >
              {para}
            </Typography>
          ))}
        </Box>

        <Box
          component="img"
          src={`/assets/${story.img}`}
          alt={story.title}
          sx={{
            width: { xs: "300%", md: 500, paddingRight: 100 },  
            height: 300,                     
            objectFit: "cover",
            borderRadius: 2,
            flexShrink: 0,
          }}
        />
      </Box>

    </Box>
  );
};

export default StoryDetail;
