import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';

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
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
               </Card>
            </div>
            );
             } else
            return(
                <div></div>
            );
    }
    
    function RenderComments({com, addComment, dishId}){
        if (com != null) {
            const cmt = com.map((cmts)=>{ 
                const cmta = cmts.comment;
              /*  const cmta =new Date(cmts.date.slice(0,10)).toString().slice(4,10);
                const cmtb =new Date(cmts.date.slice(0,10)).toString().slice(11,15); 
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmts.date)))}*/
                return(
                    <div className="cmtgroupmap mt-4">
                         <quote>{cmta}</quote>
                         <div className="m-2">
                            <cite>--  {cmts.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmts.date)))}</cite>
                         </div>
                    </div>
                    
                );
            })
            return(
                <div className="comments">
                    <div className="commentsgroup" >
                        <h4>Comments</h4>
                        <div className="cmtgroup">
                            {cmt}
                        </div>
                        <div className="cmtform">
                            <CommentForm dishId={dishId} addComment={addComment}/>
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
                        addComment = {props.addComment}
                        dishId ={props.dish.id}
                    />
                  </div>
            </div>
        </div>
        );
    };