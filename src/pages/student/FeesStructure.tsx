import Navigation from "@/components/student/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CreditCard, 
  Download, 
  Receipt, 
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Calendar
} from "lucide-react";
import { motion } from 'framer-motion';

const FeesStructure = () => {
  const feesSummary = {
    totalFees: 25000,
    paidAmount: 18000,
    pendingAmount: 7000,
    nextDueDate: "2024-02-15",
    semester: "6th Semester"
  };

  const feeBreakdown = [
    { category: "Tuition Fee", amount: 15000, status: "paid" },
    { category: "Lab Fee", amount: 3000, status: "paid" },
    { category: "Library Fee", amount: 1500, status: "pending" },
    { category: "Examination Fee", amount: 2000, status: "pending" },
    { category: "Development Fee", amount: 2500, status: "pending" },
    { category: "Sports Fee", amount: 1000, status: "pending" }
  ];

  const paymentHistory = [
    {
      id: "PAY001",
      date: "2024-01-15",
      amount: 18000,
      description: "Semester 6 - Partial Payment",
      method: "Online Transfer",
      status: "completed",
      receiptNo: "REC-2024-001"
    },
    {
      id: "PAY002",
      date: "2023-08-20",
      amount: 25000,
      description: "Semester 5 - Full Payment",
      method: "Credit Card",
      status: "completed",
      receiptNo: "REC-2023-089"
    },
    {
      id: "PAY003",
      date: "2023-02-10",
      amount: 24500,
      description: "Semester 4 - Full Payment",
      method: "Bank Transfer",
      status: "completed",
      receiptNo: "REC-2023-023"
    }
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      amount: 5000,
      status: "active",
      description: "Based on academic performance",
      validUntil: "2024-06-30"
    },
    {
      name: "Need-based Aid",
      amount: 2000,
      status: "pending",
      description: "Financial assistance program",
      validUntil: "2024-12-31"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
      case "completed":
      case "active":
        return "success";
      case "pending":
        return "warning";
      case "overdue":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
      case "completed":
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const paymentProgress = (feesSummary.paidAmount / feesSummary.totalFees) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Fees Structure & Payments</h1>
          <p className="text-muted-foreground">
            Manage your fee payments and view transaction history
          </p>
        </motion.div>

        {/* Payment Alert */}
        {feesSummary.pendingAmount > 0 && (
          <Alert className="mb-6 border-warning bg-warning/10">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              You have a pending payment of <strong>${feesSummary.pendingAmount.toLocaleString()}</strong> due on {feesSummary.nextDueDate}.
              <Button variant="link" className="p-0 ml-2 h-auto text-warning hover:text-warning/80">
                Pay Now
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Payment Summary */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Payment Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Fees ({feesSummary.semester})</span>
                  <span className="font-medium">${feesSummary.totalFees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Paid Amount</span>
                  <span className="font-medium">${feesSummary.paidAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-orange-600">
                  <span>Pending Amount</span>
                  <span className="font-medium">${feesSummary.pendingAmount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Payment Progress</span>
                  <span>{Math.round(paymentProgress)}%</span>
                </div>
                <Progress value={paymentProgress} className="h-2" />
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Next Due: {feesSummary.nextDueDate}
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                <CreditCard className="h-4 w-4 mr-2" />
                Make Payment
              </Button>
            </CardContent>
          </Card>

          {/* Fee Breakdown */}
          <Card className="lg:col-span-2 shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Fee Breakdown - {feesSummary.semester}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {feeBreakdown.map((fee, index) => (
                  <motion.div
                    key={fee.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/20"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(fee.status)}
                      <span className="font-medium">{fee.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                      </Badge>
                      <span className="font-medium">${fee.amount.toLocaleString()}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Payment History */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                Payment History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map((payment, index) => (
                  <motion.div
                    key={payment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{payment.description}</h4>
                        <p className="text-sm text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${payment.amount.toLocaleString()}</div>
                        <Badge variant="secondary" className="text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{payment.method}</span>
                      <Button variant="ghost" size="sm" className="h-auto p-0">
                        <Download className="h-3 w-3 mr-1" />
                        {payment.receiptNo}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Scholarships & Aid */}
          <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Scholarships & Financial Aid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scholarships.map((scholarship, index) => (
                  <motion.div
                    key={scholarship.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{scholarship.name}</h4>
                        <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {scholarship.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-green-600">
                        ${scholarship.amount.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Valid until {scholarship.validUntil}
                      </span>
                    </div>
                  </motion.div>
                ))}
                
                <Button variant="outline" className="w-full">
                  Apply for More Scholarships
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card hover:shadow-glow/20 transition-all duration-300">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <CreditCard className="h-5 w-5" />
                <span>Pay Fees</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Download className="h-5 w-5" />
                <span>Download Receipt</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Receipt className="h-5 w-5" />
                <span>Fee Structure</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <AlertCircle className="h-5 w-5" />
                <span>Payment Help</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeesStructure;