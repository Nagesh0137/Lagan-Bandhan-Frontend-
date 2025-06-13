import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

export type FilterProps = {
  onSelect: (
    selectedAge: string | null,
    selectedIncomeRange: string | null,
  ) => void;
  onCancel: () => void;
};

export function Filter({ onSelect, onCancel }: FilterProps) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedIncomeRange, setSelectedIncomeRange] = useState<string | null>(
    null,
  );

  const ageRanges = ['18-23', '23-27', '27-31', '31-50'];
  const incomeRanges = [
    { label: '1L-5L', value: '100000-500000' },
    { label: '5L-8L', value: '500000-800000' },
    { label: '8L-13L', value: '800000-1300000' },
    { label: '13L-1CR', value: '1300000-10000000' },
  ];

  const handleCancel = () => {
    onCancel();
    setSelectedAge(null);
    setSelectedIncomeRange(null);
    setOpenModal(false);
  };

  const hasActiveFilters = selectedAge || selectedIncomeRange;

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setOpenModal(true)}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-200 font-Onest font-medium ${
            hasActiveFilters
              ? 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100'
              : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
          }`}>
          <FontAwesomeIcon icon={faFilter} className="w-4 h-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={handleCancel}
            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-all duration-200"
            title="Clear all filters">
            <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
          </button>
        )}
      </div>

      <Modal show={openModal} size="2xl" onClose={handleCancel} popup className="z-50">
        <Modal.Header className="border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <FontAwesomeIcon icon={faFilter} className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 font-Onest">Advanced Filters</h2>
          </div>
        </Modal.Header>
        
        <Modal.Body className="p-6">
          <div className="space-y-8">
            {/* Age Range Section */}
            <div>
              <h3 className="font-Onest font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Age Range
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ageRanges?.map((item, index) => {
                  const isSelected = selectedAge === item;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedAge(isSelected ? null : item)}
                      className={`relative py-3 px-4 rounded-xl border-2 transition-all duration-200 font-Onest font-medium hover:scale-105 ${
                        isSelected
                          ? 'bg-red-500 border-red-500 text-white shadow-lg'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-red-300 hover:bg-red-50'
                      }`}>
                      {item} years
                      {isSelected && (
                        <FontAwesomeIcon 
                          icon={faCheck} 
                          className="absolute top-1 right-1 w-3 h-3" 
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Income Range Section */}
            <div>
              <h3 className="font-Onest font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Annual Income
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {incomeRanges?.map((item, index) => {
                  const isSelected = selectedIncomeRange === item.value;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedIncomeRange(isSelected ? null : item.value)}
                      className={`relative py-3 px-4 rounded-xl border-2 transition-all duration-200 font-Onest font-medium hover:scale-105 ${
                        isSelected
                          ? 'bg-green-500 border-green-500 text-white shadow-lg'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50'
                      }`}>
                      ₹{item.label}
                      {isSelected && (
                        <FontAwesomeIcon 
                          icon={faCheck} 
                          className="absolute top-1 right-1 w-3 h-3" 
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                onClick={() => {
                  onSelect(selectedAge, selectedIncomeRange);
                  setOpenModal(false);
                }}
                className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-6 rounded-xl font-semibold font-Onest hover:from-red-600 hover:to-rose-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Apply Filters
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold font-Onest hover:bg-gray-200 transition-all duration-200">
                Clear All
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
