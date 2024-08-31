import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [likes, setLikes] = React.useState({
    article1: { count: 20, liked: false },
    article2: { count: 15, liked: false },
    article3: { count: 25, liked: false },
    article4: { count: 18, liked: false },
    article5: { count: 22, liked: false },
  });

  const userId = "user123"; // Simulate a user ID, in real application this should come from authentication

  // Load like state and count from localStorage when component mounts
  React.useEffect(() => {
    const savedLikes =
      JSON.parse(localStorage.getItem(`likes_${userId}`)) || {};
    setLikes((prevLikes) => ({
      ...prevLikes,
      ...savedLikes,
    }));
  }, [userId]);

  // Update localStorage whenever likes change
  React.useEffect(() => {
    localStorage.setItem(`likes_${userId}`, JSON.stringify(likes));
  }, [likes, userId]);

  const handleLike = (article) => {
    const newLikes = { ...likes };
    newLikes[article].liked = !newLikes[article].liked;
    newLikes[article].count += newLikes[article].liked ? 1 : -1;

    setLikes(newLikes);
  };

  return (
    <Container>
      <Helmet>
        <title>Ayurveda Blog | Health Tips and Articles</title>
        <meta
          name="description"
          content="Explore a variety of health tips and articles focusing on Ayurveda. Learn about kidney stones, diabetes management, and the benefits of natural products like Krishna Ayurveda Kidney Relive Juice and Diabic Care Juice."
        />
        <meta
          name="keywords"
          content="Ayurveda, health tips, kidney stones, diabetes management, natural products, Krishna Ayurveda, Kidney Relive Juice, Diabic Care Juice"
        />
        <meta name="author" content="Ayurveda Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ayurvediceshop.netlify.app/blog" />
      </Helmet>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Featured Articles
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* Article 1 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
              Article 1: Kidney Stones in Young Adults
            </Typography>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardMedia
                component="img"
                height="300"
                image="https://i0.wp.com/blog.krishnaayurved.com/wp-content/uploads/2024/07/13.png?resize=768%2C416&ssl=1"
                alt="Kidney Stones in Young Adults"
              />
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Kidney Stones
                </Typography>
                <IconButton
                  onClick={() => handleLike("article1")}
                  sx={{ color: likes.article1.liked ? "red" : "inherit" }}
                >
                  {likes.article1.liked ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  {likes.article1.count}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Paper sx={{ maxHeight: 300, overflow: "auto", p: 2 }}>
              <Typography variant="body1" paragraph>
                Kidney stones were once considered primarily a concern for
                middle-aged adults. Unfortunately, diets high in ultra-processed
                foods and lifestyle changes have increased the rates of kidney
                stones among the younger generation, including teens and those
                in their 20s.
              </Typography>
              <Typography variant="body1" paragraph>
                While a balanced diet and staying well hydrated are key for
                maintaining kidney function, it is equally important to support
                your kidney health with natural products like Krishna Ayurveda
                Kidney Relive Juice. This juice helps strengthen your kidney
                function and prevent stone formation without any risk of side
                effects.
              </Typography>
              <Typography variant="body1" paragraph>
                It is a well-known fact that kidney stones are one of the most
                painful medical maladies. If you’ve ever experienced it, you
                know just how true that is!
              </Typography>
              <Typography variant="body1" paragraph>
                But here’s something you might not know— not all stones are
                created equal and are made up of different substances. Let’s
                explore some common types of kidney stones and how to avoid
                them.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <Card sx={{ maxWidth: 600, width: "100%" }}>
              <CardMedia
                component="iframe"
                src="https://www.youtube.com/embed/R7gidyH7_2Y?si=XH-dtphXHs_sFv8S"
                title="Kidney Stones Overview"
                height="315"
                sx={{ width: "100%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Card>
          </Box>
          <Divider sx={{ my: 4, borderBottomWidth: 3 }} />

          {/* Article 2 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
              Article 2: Living with Type 1 Diabetes
            </Typography>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardMedia
                component="img"
                height="300"
                image="https://i0.wp.com/blog.krishnaayurved.com/wp-content/uploads/2024/07/3.png?resize=768%2C416&ssl=1"
                alt="Living with Type 1 Diabetes"
              />
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Type 1 Diabetes
                </Typography>
                <IconButton
                  onClick={() => handleLike("article2")}
                  sx={{ color: likes.article2.liked ? "red" : "inherit" }}
                >
                  {likes.article2.liked ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  {likes.article2.count}
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{ mt: 2, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}
            >
              <Typography variant="body1" gutterBottom>
                Living with Type 1 diabetes may seem like a life sentence. The
                regular monitoring of blood sugar levels, the meticulous
                planning of meals, and taking multiple insulin shots daily can
                become a constant source of stress. Yet, sometimes these
                essential steps alone are not enough.
              </Typography>
              <Typography variant="body1" gutterBottom>
                To support your diabetes journey, include Ayurvedic products
                like Krishna’s Diabic Care Juice. It is a powerful formulation
                of multiple herbs that are known to manage blood sugar in a
                completely natural manner.
              </Typography>
              <Typography variant="body1" gutterBottom>
                This article has compiled everything you need to know about Type
                1 Diabetes and its management. So, read on to get the full
                breakdown.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Card sx={{ maxWidth: 600, width: "100%" }}>
              <CardMedia
                component="iframe"
                src="https://www.youtube.com/embed/Qrwn1G2rcOk?si=zE5ZMKY23vhkfmeA"
                title="Type 1 Diabetes Overview"
                height="315"
                sx={{ width: "100%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Card>
          </Box>
          <Divider sx={{ my: 4, borderBottomWidth: 3 }} />

          {/* Article 3 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
              Article 3: Noni Juice
            </Typography>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardMedia
                component="img"
                height="300"
                image="https://i0.wp.com/blog.krishnaayurved.com/wp-content/uploads/2024/06/1.png?resize=768%2C416&ssl=1"
                alt="Ayurvedic Remedies for Skin Care"
              />
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Skin Care
                </Typography>
                <IconButton
                  onClick={() => handleLike("article3")}
                  sx={{ color: likes.article3.liked ? "red" : "inherit" }}
                >
                  {likes.article3.liked ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  {likes.article3.count}
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{ mt: 2, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}
            >
              <Typography variant="body1" gutterBottom>
                Ayurveda has long been known for its holistic approach to skin
                care. With its emphasis on natural ingredients and gentle
                remedies, Ayurvedic skin care offers a safe and effective
                alternative to harsh chemicals and synthetic products.
              </Typography>
              <Typography variant="body1" gutterBottom>
                From treating acne to rejuvenating tired skin, Ayurvedic
                remedies can address a wide range of skin concerns. Discover the
                best Ayurvedic herbs and practices for achieving healthy,
                glowing skin.
              </Typography>
              <Typography>
                Noni juice, derived from the fruit of the Morinda citrifolia
                tree, is known for its potential health benefits. It's rich in
                antioxidants and may support immune function, promote heart
                health, and aid in digestion. Noni juice is also believed to
                have anti-inflammatory properties and could help in managing
                pain and improving skin health. However, its strong taste and
                potential interactions with medications should be considered
                before regular consumption.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Card sx={{ maxWidth: 600, width: "100%" }}>
              <CardMedia
                component="iframe"
                src="https://www.youtube.com/embed/cosES8bpcbw?si=BuTK2_ViqutKQzQ9"
                title="Ayurvedic Skin Care Overview"
                height="315"
                sx={{ width: "100%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Card>
          </Box>
          <Divider sx={{ my: 4, borderBottomWidth: 3 }} />

          {/* Article 4 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
              Article 4: Ashwagandha Juice
            </Typography>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardMedia
                component="img"
                height="300"
                image="https://i0.wp.com/blog.krishnaayurved.com/wp-content/uploads/2024/06/Fuel-Your-Day-with-Ashwagandha-Juice-A-Natural-Energy-Enhancer.jpg?resize=768%2C416&ssl=1"
                alt="Understanding Diabetic Wellness"
              />
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Energy Booster
                </Typography>
                <IconButton
                  onClick={() => handleLike("article4")}
                  sx={{ color: likes.article4.liked ? "red" : "inherit" }}
                >
                  {likes.article4.liked ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  {likes.article4.count}
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{ mt: 2, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}
            >
              <Typography variant="body1" gutterBottom>
                Ashwagandha juice, extracted from the roots of the Withania
                somnifera plant, is renowned in Ayurveda for its adaptogenic
                properties. It helps the body cope with stress, boost energy
                levels, and improve mental clarity. 
               </Typography>
               <Typography> Regular consumption of Ashwagandha juice may support immune function, enhance stamina,
                and promote overall vitality. It's also known to aid in reducing
                anxiety and improving sleep quality. However, individuals should
                consult with healthcare professionals, especially if pregnant,
                nursing, or taking medications, to ensure safe and effective
                use.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Card sx={{ maxWidth: 600, width: "100%" }}>
              <CardMedia
                component="iframe"
                src="https://www.youtube.com/embed/zelp1DLPTjw?si=VgxmZFyhtm4Ix7UC"
                title="Diabetic Wellness Overview"
                height="315"
                sx={{ width: "100%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Card>
          </Box>
          <Divider sx={{ my: 4, borderBottomWidth: 3 }} />

          {/* Article 5 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
              Article 5: Benefits of Natural Products in Ayurveda
            </Typography>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardMedia
                component="img"
                height="300"
                image="https://i0.wp.com/blog.krishnaayurved.com/wp-content/uploads/2024/06/High-vs.-Low-Glycemic-Index-How-Different-Foods-Impact-Blood-Sugar-Levels.jpg?resize=768%2C416&ssl=1"
                alt="Benefits of Natural Products in Ayurveda"
              />
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Natural Products
                </Typography>
                <IconButton
                  onClick={() => handleLike("article5")}
                  sx={{ color: likes.article5.liked ? "red" : "inherit" }}
                >
                  {likes.article5.liked ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  {likes.article5.count}
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{ mt: 2, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}
            >
              <Typography variant="body1" gutterBottom>
                Natural products have gained popularity for their efficacy and
                safety in promoting health and well-being. In Ayurveda, natural
                ingredients are revered for their therapeutic properties and
                ability to support the body's natural healing processes.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Discover the benefits of incorporating natural products into
                your daily routine and how they can enhance your overall health
                and vitality.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Card sx={{ maxWidth: 600, width: "100%" }}>
              <CardMedia
                component="iframe"
                src="https://www.youtube.com/embed/zVzkZyj8etU?si=BVSGMzH7DReGSPic"
                title="Benefits of Natural Products Overview"
                height="315"
                sx={{ width: "100%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Side Articles
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Card sx={{ backgroundColor: "#e3f2fd", mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Natural Remedies for Healthy Kidneys
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover effective natural remedies to maintain healthy kidneys and prevent the formation of kidney stones.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: "#e3f2fd", mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Ayurvedic Tips for Diabetes Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn how Ayurveda can help manage diabetes effectively with simple lifestyle and dietary changes.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: "#e3f2fd", mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Diabic Care Juice for Type 1 Diabetes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Understand everything about Krishna’s Diabic Care Juice. Its ingredients, benefits, dosage, and how it fits into your diabetes management routine.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        {/* Footer */}
        <Box
          component="footer"
          sx={{ py: 1, bgcolor: "", color: "black", width: "100%" }}
        >
          <Container
            maxWidth="md"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="body1">
              © 2024 Ayurveda Blog. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Grid>
    </Container>
  );
};

export default Blog;
