import { Component } from 'react';
import '../../css/moviepage.css';
import moviedatalist from '../sub-component/movielist';


class Movies extends Component{
    constructor(props){
        super(props);
         this.state = {
            moviedatalist:moviedatalist,
            OriginalList:moviedatalist,
            UnSortData:moviedatalist,
            Checktype:[],
            CheckDate:[],
            CheckLanguage:[],
            CheckPrice:[],
            CheckMoreFilter:[]
         }
    }

    componentDidMount(){
        this.renderDisplay();
        this.functionCheckBoxDate();
        this.functionChipLabelArray();
        this.functionLanguageSelect();
        this.functionPrice();
        this.functionMovieType();
    }



    handle_Data_Update=(data)=>{
        this.setState({moviedatalist:data})
    }

    // handle_Reset_Data=()=>{
        
    // }

    handleOnClickChip(e,item){
        let ok = moviedatalist.filter(type => item === type.type);

        if(ok.length === 0){      
           this.setState({moviedatalist:this.state.OriginalList})
        }else{
           this.handle_Data_Update(ok)
        }
    }


    handleOnCheck_MovieType(e,item){
        let newArray = [...this.state.Checktype, item];
        let moviedatalist = this.state.OriginalList;
        // let moviedatalist = this.state.moviedatalist;
        if (this.state.Checktype.includes(item)) {
             newArray = newArray.filter(day => day !== item);
          } 
          this.setState({Checktype: newArray});                   
            let ok = moviedatalist.filter(item => newArray.some(newArray => newArray === item.type));

             if(ok.length === 0){      
                this.setState({moviedatalist:this.state.OriginalList})
             }else{
                this.handle_Data_Update(ok)
             }
          
    }



    handleCheckboxDate(e,item){
        let newArray = [...this.state.CheckDate, item];
        let moviedatalist = this.state.OriginalList;
        // let moviedatalist = this.state.moviedatalist;
        if (this.state.CheckDate.includes(item)) {
            newArray = newArray.filter(day => day !== item);
         }
         this.setState({CheckDate: newArray});
    //    moviedatalist.map((item,index)=>{
    //         item.date.map((date_item,date_index)=>{
    //              newArray.map((week_item,week_index)=>{
    //                 if(date_item == week_item){
    //                     console.log(item)
    //                     return item
    //                 }
    //             })   
    //         })
    //      })
         let ok = moviedatalist.filter(item => item.date.some(date => newArray.some(newArray => newArray === date)));
       
        if(ok.length === 0){      
            this.setState({moviedatalist:this.state.OriginalList})
         }else{
            this.handle_Data_Update(ok)
         }
    }

    handleLanguageChange(e,item){
        
            let newArray = [...this.state.CheckLanguage, item];
            let moviedatalist = this.state.OriginalList;
            // let moviedatalist = this.state.moviedatalist;
            if (this.state.CheckLanguage.includes(item)) {
                newArray = newArray.filter(day => day !== item);
             }
             this.setState({CheckLanguage: newArray});
             let ok = moviedatalist.filter(item => item.Language.some(Language => newArray.some(newArray => newArray === Language)));
            //  console.log("TempData==>",ok);
            if(ok.length === 0){      
                this.setState({moviedatalist:this.state.OriginalList})
             }else{
                this.handle_Data_Update(ok)
             }
        
    }

    handlePriceChange(e,item){
      
            let newArray = [...this.state.CheckPrice, item];
            let moviedatalist = this.state.OriginalList;
            // let moviedatalist = this.state.moviedatalist;
            if (this.state.CheckPrice.includes(item)) {
                 newArray = newArray.filter(day => day !== item);
              } 
              this.setState({CheckPrice: newArray});                   
                let ok = moviedatalist.filter(item => newArray.some(newArray => newArray === item.Price));
                // console.log("TempData==>",ok);
                if(ok.length === 0){      
                    this.setState({moviedatalist:this.state.OriginalList})
                 }else{
                    this.handle_Data_Update(ok)
                 } 
        
    }

    handleMoreFilterChange(e,item){
        let newArray = [...this.state.CheckMoreFilter, item];
        let moviedatalist = this.state.OriginalList;
        // let moviedatalist = this.state.moviedatalist;
        if (this.state.CheckMoreFilter.includes(item)) {
             newArray = newArray.filter(day => day !== item);
          } 
          this.setState({CheckMoreFilter: newArray});                   
            let ok = moviedatalist.filter(item => newArray.some(newArray => newArray === item.MoreFilter));
            // console.log("TempData==>",ok);
            if(ok.length === 0){      
                this.setState({moviedatalist:this.state.OriginalList})
             }else{
                this.handle_Data_Update(ok)
             }
    }

    handleSorting=(e)=>{
        let list = this.state.moviedatalist;

        if(e.target.value === "asc"){
           this.sortByNameAsc(list);
        }else if(e.target.value === "dec"){
            this.sortByNameDesc(list);
        }else if(e.target.value === "clear"){
            this.setState({moviedatalist:moviedatalist})
        }
    }

    sortByNameAsc=(list)=>{

       let data = list.sort((a, b) => a.movie_name.localeCompare(b.movie_name));

        this.setState({moviedatalist:data})
     
      }
    
      sortByNameDesc=(list)=>{
  
        let data = list.sort((a, b) => b.movie_name.localeCompare(a.movie_name));
        this.setState({moviedatalist:data})
      }

    /** components */


    functionChipLabelArray=(e)=>{
        const ChipLabelArray = ["Animated","Historical","Biographical","Documentary","Silent","Comedy"];
        return(
             <section  style={{paddingTop:'1%'}}>
                   {    ChipLabelArray.map((item,key)=>{
                                    return(
                                        <button id={item} key={key} label={item} className={item} onClick={(e)=>this.handleOnClickChip(e,item)} style={{marginTop:'1vh',marginLeft:'1vw',width:'fit-content',backgroundColor:'grey',borderRadius:'15%'}}>
                                          {item}
                                        </button> 
                                    )
                                })
                    }
                &nbsp; &nbsp; sort {this.functionSorting()}
             </section>
        )
    }
   
    functionMovieType=(e)=>{
        const ChipLabelArray = ["Animated","Historical","Biographical","Documentary","Silent","Comedy"];
        return(
             <section>
                 <table>
                     <tbody>
                     {    ChipLabelArray.map((item,key)=>{
                                    return(
                                        <tr key={key}>
                                           <td> {item} </td>
                                        <td> <input id={"Chip_"+item}  type="checkbox" name={item} value={this.state.Checktype} className={"Chip_"+item} onClick={(e)=>this.handleOnCheck_MovieType(e,item)} /> 
                                         </td>
                                        </tr>
                                        )
                                })
                    }
                     </tbody>
                  </table>

                  
             </section>
        )
    }

    functionCheckBoxDate=(e)=>{
        const DateLabelArray = ["Today","Tomorrow","This Weekend"];
        return(
                            <section>
                                <table>
                                    <tbody>
                                    {
                                        DateLabelArray.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                <td>{item} </td>
                                                <td> <input id={"Checkbox"+item} type="checkbox" className={"Checkbox"+item} name={item} value={this.state.CheckDate} onChange={(e)=>this.handleCheckboxDate(e,item)} /> 
                                                </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                                    
                               
                            </section>
       
        )
    }

    
    functionLanguageSelect=(e)=>{
        const Language = ["Hindi","English","Kannada","Gujarati","Telugu","Urdu","Malayalam"];
        return(
            <section>
              <table>
                  <tbody>
                  {
                      Language.map((item,key)=>{
                          return(
                              <tr key={key}>
                               <td>{item} </td>
                               <td> <input id={"Checkbox"+item} type="checkbox" className={"Checkbox"+item} name={item} value={this.state.CheckLanguage} onChange={(e)=>this.handleLanguageChange(e,item)} /> <br/>
                                </td>
                              </tr>
                          )
                      })
                  }
                  </tbody>
              </table>
            
            
          </section>
        )
    }

    functionPrice=(e)=>{
        const Price = ["Free","0-500","501-2000","Above 2000"];
        return(
            <section>
                <table>
                    <tbody>
                    {
                        Price.map((item,key)=>{
                            return(
                             
                              <tr key={key}>
                                <td>{item} </td>
                                 <td> <input id={"Checkbox"+item} type="checkbox" className={"Checkbox"+item} name={item} value={this.state.CheckPrice} onChange={(e)=>this.handlePriceChange(e,item)} /> <br/>
                                   </td>
                              </tr>
                            
                            )
                        })
                    }
                    </tbody>
                </table>   
            </section>
        )
    }

    functionMoreFilter=(e)=>{
        const MoreFilter = ["Online Streaming","Kids Allowed","Free Food"];
        return(
            <section>
               <table>
                   <tbody>
                   {
                        MoreFilter.map((item,key)=>{
                            return(
                             
                              <tr key={key}>
                              <td> {item} </td>
                               <td> <input id={"Checkbox"+item} type="checkbox" className={"Checkbox"+item} name={item} value={this.state.CheckMoreFilter} onChange={(e)=>this.handleMoreFilterChange(e,item)} /> <br/>
                               </td>
                               </tr>
                            
                            )
                        })
                    }
                   </tbody>
               </table>
                
              
            </section>  
        )
    }

    functionSorting=(e)=>{
        return(
                        <select name="sortList" id="sorting" onChange={this.handleSorting}>
                            <option name='default'></option>
                            <option value="asc"> A-Z </option>
                            <option value="dec"> Z-A </option>
                            <option value="clear"> clear </option>
                        </select>
        )
    }

    renderDisplay=()=>{
        // console.log("moviedatalist====",this.state.moviedatalist)
          return(
              <div>
                  <table>
                      <tbody>
                         <tr style={{display:'block'}}>
                         
                          {   this.state.moviedatalist.map((item,key)=>{
                                     key = key +1
                                 
                                 return( 
                              
                                        <td className={key%8==0?"break":""} style={{paddingTop:"5%"}}>
                                     
                                            
                                            <img src={item.img} className="movie-list-of-poster" alt="img"/><br/>
                                            <b>{item.movie_name}</b><br/>
                                            Type: {item.type}<br/>
                                            Date: {item.date.map((Ditem,Dindex)=>{
                                                    return " "+Ditem+" "
                                            })}<br/>
                                                Language: {item.Language.map((Litem,Lindex)=>{
                                                    return " "+Litem+" "
                                            })}<br/>
                                            Price:{item.Cost}<br/>
                                            Rating:{item.Rate}<br/>
                                            <span style={{color:'red'}}>Special Offer</span> : {item.MoreFilter}<br/><br/>
                                      
                                        
                                         </td>
                                    
                                 )
                               
                                
                            })}

                             
                            </tr>
                         
                      </tbody>
                  </table>
              </div>
          )        
    }


    render(){
        return(
            <div> 

              <table>
                  <tbody>
                      <tr>


                          <td style={{width:'12vw',paddingTop:'9%'}}>
                            <table>
                                <tbody>
                                    <tr>
                                        {/* <th> <h3> Filter </h3> </th> */}
                                    </tr>
                                    <tr>
                                        <td style={{paddingLeft:'2%'}}>
                                                <h4> Date </h4>
                                                {this.functionCheckBoxDate()} <br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <h4> Movie Type </h4>
                                                {this.functionMovieType()}<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <h4>  Language </h4>
                                                {this.functionLanguageSelect()} <br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <h4>  Cost </h4>
                                                {this.functionPrice()}<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <h4>  More Filter </h4>
                                                {this.functionMoreFilter()}<br/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                          </td>


                          <td style={{display:'block'}}>
                                {this.functionChipLabelArray()} 
                                {this.renderDisplay()}
                          </td>


                      </tr>
                  </tbody>
              </table>  
            </div>
        )
    }
}

export default Movies;