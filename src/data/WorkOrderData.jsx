export const workOrders = [
  {
    id: 'WO-1001',                     
    client: 'ABC Retail',              
    locationName: 'Store #123',        
    locationNumber: 'LOC-001',         
    status: 'Pending',                 
    division: 'Retail Ops',            
    category: 'Electrical',            
    orderType: 'Urgent',               
    priority: 'High',                  
    manager: 'John Smith',             
    dne: false,                        
    caller: 'Alice Johnson',           
    clientPoNumber: 'PO-4455',         
    invoiceNumber: 'INV-2221',         
    vendor: 'Electric Pros Inc.',      
    onsiteDate: '2025-07-10',          
    cityState: 'Dallas, TX',           
    slt: '',                           
    followUpUser: 'David Brooks',      
    followUpDate: '2025-07-12',        
    inputDate: '2025-07-01',           
    actRef: 'AC-REF-0901',             

    coordinates: {
      name: 'Store #123',
      lat: 32.7767,
      lng: -96.7970
    }
  },
  {
    id: 'WO-1002',
    client: 'XYZ Corporation',
    locationName: 'Office Park',
    locationNumber: 'LOC-002',
    status: 'Completed',
    division: 'Corporate Services',
    category: 'HVAC',
    orderType: 'Recurring',
    priority: 'Medium',
    manager: 'Emily Johnson',
    dne: false,
    caller: 'Mike Brown',
    clientPoNumber: 'PO-8934',
    invoiceNumber: 'INV-2231',
    vendor: 'Cool Air Ltd.',
    onsiteDate: '2025-07-09',
    cityState: 'Chicago, IL',
    slt: '',
    followUpUser: 'Lucas Grant',
    followUpDate: '2025-07-14',
    inputDate: '2025-07-02',
    actRef: 'AC-REF-0902',
    coordinates: {
      name: 'Office Park',
      lat: 41.8781,
      lng: -87.6298
    }
  },

];
