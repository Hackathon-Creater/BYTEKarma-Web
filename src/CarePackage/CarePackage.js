import React from 'react';
import styled from 'styled-components';
import { Card, ProgressBar, Carousel } from "react-bootstrap";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Carepackage = () => (
  <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
    <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
      <div class="container-fluid sp">
        <div class="row " >
          <div class="col-md-12" style={{ marginTop: '2%' }}>

            <Carousel>
              <Carousel.Item>
              <div class="row" style={{ marginLeft: '5%' }} >

              <div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
    <Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
        <Card.Body>
            <Card.Title>Care Package 1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
            <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                99%
                <ProgressBar variant="success" now={99} />
            </Card.Text>

            <Card.Link href="https://www.gamblingtherapy.org/en">See More Deatils</Card.Link>

        </Card.Body>
    </Card>
</div>
<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
    <Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
        <Card.Body>
            <Card.Title>Care Package 2</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
            <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                90%
                <ProgressBar variant="success" now={90} />
            </Card.Text>

            <Card.Link href="https://www.goodtherapy.org/blog/dear-gt/how-can-i-end-my-gambling-addiction-for-good">See More Deatils</Card.Link>

        </Card.Body>
    </Card>
</div>
<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
    <Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
        <Card.Body>
            <Card.Title>Care Package 3</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
            <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                80%
                <ProgressBar variant="success" now={80} />
            </Card.Text>

            <Card.Link href="https://www.lifehack.org/articles/money/ditch-the-excuses-15-tips-quit-spending-your-money.html">See More Deatils</Card.Link>

        </Card.Body>
    </Card>
</div>

</div>
           
              </Carousel.Item>
              <Carousel.Item>
              <div class="row" style={{ marginLeft: '5%' }} >

<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
<Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
<Card.Body>
<Card.Title>Care Package 3</Card.Title>
<Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
<Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
  99%
  <ProgressBar variant="success" now={99} />
</Card.Text>

<Card.Link href="https://www.gamblingtherapy.org/en">See More Deatils</Card.Link>

</Card.Body>
</Card>
</div>
<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
<Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
<Card.Body>
<Card.Title>Care Package 5</Card.Title>
<Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
<Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
  90%
  <ProgressBar variant="success" now={90} />
</Card.Text>

<Card.Link href="https://www.goodtherapy.org/blog/dear-gt/how-can-i-end-my-gambling-addiction-for-good">See More Deatils</Card.Link>

</Card.Body>
</Card>
</div>
<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
<Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
<Card.Body>
<Card.Title>Care Package 6</Card.Title>
<Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
<Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
  80%
  <ProgressBar variant="success" now={80} />
</Card.Text>

<Card.Link href="https://www.lifehack.org/articles/money/ditch-the-excuses-15-tips-quit-spending-your-money.html">See More Deatils</Card.Link>

</Card.Body>
</Card>
</div>

</div>

              </Carousel.Item>
              <Carousel.Item>
              <div class="row" style={{ marginLeft: '5%' }} >

<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
<Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
<Card.Body>
<Card.Title>Care Package 7</Card.Title>
<Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
<Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
  99%
  <ProgressBar variant="success" now={99} />
</Card.Text>

<Card.Link href="https://www.gamblingtherapy.org/en">See More Deatils</Card.Link>

</Card.Body>
</Card>
</div>
<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
<Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
<Card.Body>
<Card.Title>Care Package 8</Card.Title>
<Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
<Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
  90%
  <ProgressBar variant="success" now={90} />
</Card.Text>

<Card.Link href="https://www.goodtherapy.org/blog/dear-gt/how-can-i-end-my-gambling-addiction-for-good">See More Deatils</Card.Link>

</Card.Body>
</Card>
</div>
<div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
<Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
<Card.Body>
<Card.Title>Care Package 9</Card.Title>
<Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
<Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
  80%
  <ProgressBar variant="success" now={80} />
</Card.Text>

<Card.Link href="https://www.lifehack.org/articles/money/ditch-the-excuses-15-tips-quit-spending-your-money.html">See More Deatils</Card.Link>

</Card.Body>
</Card>
</div>

</div>

              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row">
            
            <div class="col-sm-1"></div>
  <div class="col-sm-8">
  <br></br>
            <br></br>
            <br></br>
            <br></br>
  <p>If you want to spend less money, you’ve got to go about it in the right way. You know you have to save for the future, but how do you make sure that it’s really gonna stick? Unless you have some great ideas and a plan, you might run into trouble. 

      </p>
  <b> <p>Follow these above <strong>Care Package</strong> to curb your spending.</p></b>
  </div>
  <div class="col-sm-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

)