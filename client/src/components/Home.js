import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Container maxWidth={100}>
      <Grid container>
        <Grid
          item
          container
          boxShadow={"0 4px 4px grey"}
          justifyContent="flex-start"
          alignItems="stretch"
          mt={2}
        >
          <Grid
            item
            xs={6}
            md={4}
            lg={2}
            py={2}
            style={{ cursor: "pointer" }}
            borderRight={"2px solid grey"}
          >
            <Typography textAlign={"center"} fontSize={"1.5rem"}>
              Index
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg={2}
            py={2}
            style={{ cursor: "pointer" }}
            borderRight={"2px solid grey"}
          >
            <Typography textAlign={"center"} fontSize={"1.5rem"}>
              Companies
            </Typography>
          </Grid>
          <Grid item xs={0} md={4} lg={7} />
        </Grid>
        <Grid container item borderBottom={"2px solid grey"}>
          <Grid item lg={1} />
          <Typography variant="h3" textAlign="left" fontWeight={700} py={2}>
            Nifty 50
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems={"center"}
          boxShadow={"0 4px 4px grey"}
          py={2}
        >
          <Grid item lg={1} />
          <Grid item container direction="column" lg={4} px={1}>
            <Grid item container mb={2}>
              <Grid item xs={12}>
                <Typography fontSize={"3rem"} fontWeight={1000}>
                  17,900.15
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize={"1.5rem"} fontWeight={700}>
                  ^113.69(0.64%)
                </Typography>
              </Grid>
            </Grid>
            <Grid item alignContent={"center"}>
              <Typography
                variant="h6"
                fontWeight={500}
                color="GrayText"
                letterSpacing={2}
              >
                As on 13Jan, 2023 13:25 IST
              </Typography>
            </Grid>
          </Grid>
          <Grid item conainer lg={6} px={1}>
            <Grid item xs={12} mt={2}>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={1} />
        </Grid>
        <Grid item container pb={4} boxShadow={"0 4px 4px grey"}>
          <Container maxWidth={100}>
            <Grid container xs={12} py={2}>
              <Typography variant="h3" fontWeight={700}>
                Overview
              </Typography>
            </Grid>
            <Grid container justifyContent="space-">
              <Grid item container>
                <Grid item container borderBottom={"4px solid grey"}>
                  <Grid item>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      Open
                    </Typography>
                  </Grid>
                  <Grid item ml={"auto"}>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      17,865.25
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container borderBottom={"4px solid grey"}>
                  <Grid item>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      Last Closed
                    </Typography>
                  </Grid>
                  <Grid item ml={"auto"}>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      17,858.20
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container borderBottom={"4px solid grey"}>
                  <Grid item>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      Day High
                    </Typography>
                  </Grid>
                  <Grid item ml={"auto"}>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      17,967.32
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item container borderBottom={"4px solid grey"}>
                  <Grid item>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      Day Low
                    </Typography>
                  </Grid>
                  <Grid item ml={"auto"}>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      17,774.53
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container borderBottom={"4px solid grey"}>
                  <Grid item>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      52 Week High
                    </Typography>
                  </Grid>
                  <Grid item ml={"auto"}>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      18,887.74
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container borderBottom={"4px solid grey"}>
                  <Grid item>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      52 Week Low
                    </Typography>
                  </Grid>
                  <Grid item ml={"auto"}>
                    <Typography variant="h5" fontWeight={600} mb={1} mt={2}>
                      15,183.50
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item container mt={2} px={2}>
          <Grid item container>
            <Grid item lg={1} />
            <Grid item>
              <Typography variant="h3" fontWeight={700}>
                Chart
              </Typography>
            </Grid>
          </Grid>
          <Grid item container></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
