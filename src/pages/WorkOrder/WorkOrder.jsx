import { useState } from 'react';
import { FiMap, FiList } from 'react-icons/fi';
import CustomMap from '../../components/CustomMap';
import Layout from '../../components/Layout';
import { workOrders } from '../../data/WorkOrderData';

export default function WorkOrder() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Work Orders</h1>
        <div className="space-x-3">
          {viewMode === 'table' ? (
            <button
              onClick={() => setViewMode('map')}
              className="bg-gray-100 p-2 rounded hover:bg-gray-200"
              title="Map View"
            >
              <FiMap className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setViewMode('table')}
              className="bg-gray-100 p-2 rounded hover:bg-gray-200"
              title="Table View"
            >
              <FiList className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {viewMode === 'map' ? (
        <div className="h-[80vh] w-full rounded shadow overflow-hidden">
          <CustomMap />
        </div>
      ) : (
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <table className="min-w-[1500px] text-left border-collapse">
            <thead>
              <tr className="text-sm font-medium text-gray-600 border-b">
                <th className="p-3">WO #</th>
                <th className="p-3">Client</th>
                <th className="p-3">Loc Name</th>
                <th className="p-3">Loc #</th>
                <th className="p-3">Status</th>
                <th className="p-3">Division</th>
                <th className="p-3">Category</th>
                <th className="p-3">Order Type</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Manager</th>
                <th className="p-3">DNE</th>
                <th className="p-3">Caller</th>
                <th className="p-3">Client PO #</th>
                <th className="p-3">Invoice #</th>
                <th className="p-3">Vendor</th>
                <th className="p-3">Onsite Date</th>
                <th className="p-3">City / State</th>
                <th className="p-3">SLT</th>
                <th className="p-3">Follow-Up User</th>
                <th className="p-3">Follow-Up Date</th>
                <th className="p-3">Input Date</th>
                <th className="p-3">Act Ref</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {workOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.client}</td>
                  <td className="p-3">{order.locationName}</td>
                  <td className="p-3">{order.locationNumber}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3">{order.division}</td>
                  <td className="p-3">{order.category}</td>
                  <td className="p-3">{order.orderType}</td>
                  <td className="p-3">{order.priority}</td>
                  <td className="p-3">{order.manager}</td>
                  <td className="p-3">{order.dne ? 'Yes' : 'No'}</td>
                  <td className="p-3">{order.caller}</td>
                  <td className="p-3">{order.clientPoNumber}</td>
                  <td className="p-3">{order.invoiceNumber}</td>
                  <td className="p-3">{order.vendor}</td>
                  <td className="p-3">{order.onsiteDate}</td>
                  <td className="p-3">{order.cityState}</td>
                  <td className="p-3">{order.slt}</td>
                  <td className="p-3">{order.followUpUser}</td>
                  <td className="p-3">{order.followUpDate}</td>
                  <td className="p-3">{order.inputDate}</td>
                  <td className="p-3">{order.actRef}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}
