/**
 * Created by ASUS on 2016/11/3.
 */
window.onload = function()
{
    document.getElementById("ejmain").src="{:leuu('article/index',array('id'=>$vo['object_id'],'cid'=>$vo['term_id']))}";
}
