import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderDish({dish}) {

        if (dish.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (dish.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{dish.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (dish != null) {
            return(
            <div className="row">
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }} >
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
               </Card>
               </FadeTransform>
            </div>
            );
             } else
            return(
                <div></div>
            );
    }
    /*  const cmta =new Date(cmts.date.slice(0,10)).toString().slice(4,10);
                const cmtb =new Date(cmts.date.slice(0,10)).toString().slice(11,15); 
                */
    function RenderComments({com, postComment, dishId}){
        if (com != null) {
             const cmt =
            <Stagger in>
            {com.map((cmt) => {
                return (
                    <Fade in>
                    <li key={cmt.id} className="list-unstyled">
                    <p>{cmt.comment}</p>
                    <p>-- {cmt.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
                    </li>
                    </Fade>
                );
            })}
            </Stagger>
            
            return(
                <div className="comments">
                    <div className="commentsgroup" >
                        <h4>Comments</h4>
                        <div className="cmtgroup">
                            {cmt}
                        </div>
                        <div className="cmtform">
                            <CommentForm dishId={dishId} postComment={postComment}/>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
 export const DishDetail = (props) => {
        return (
        <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row ">
                  <div  className="col-12 col-md-5 col-xl-5 m-1">
                    <RenderDish dish = {props.dish} />
                  </div>
                  <div className="col-12 col-md-5 col-xl-5 m-1">
                    <RenderComments com = {props.comments} 
                        postComment = {props.postComment}
                        dishId ={props.dish.id}
                    />
                  </div>
            </div>
        </div>
        );
    };