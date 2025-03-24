import MyButton from "@components/Button/Button";
import FormItem from "@/pages/DetailProduct/components/FormItem";
import styles from '../styles.module.scss';

function ReviewProduct() {
    const {containerReview, review, noReview, replyForm, commentReplyTitle, CommentNote, checkboxReview, boxBtn} = styles;
    return <div className={containerReview}>
        <div className={review}>REVIEW</div>
        <p className={noReview}> There are no reviews yet.</p>
        
        <div className={replyForm}>
        <div className={commentReplyTitle}>Be the first to review “Amet faucibus nunc”</div>
        <p className={CommentNote}>Your email address will not be published. Required fields are marked</p>

        <form action="">
            {/* Rating */}
        <FormItem label={'Your Rating'} isRequired ={true} typeChildren='rating'/>
        {/* Review */}
        <FormItem label={'Your Review'} isRequired ={true} typeChildren='texArea'/>
        {/* name */}
        <FormItem label={'Name'} isRequired ={true} typeChildren='input'/>
        {/* name */}
        <FormItem label={'Email'} isRequired ={true} typeChildren='input'/>

        <div className={checkboxReview}>
            <input type="checkbox" />
            <span>Save my name, email, and website in this browser for the next time I comment.</span>
        </div>
        <div className={boxBtn}>
        <MyButton content='SUBMIT'/>
        </div>
        </form>
        </div>
    </div>;
}

export default ReviewProduct;
