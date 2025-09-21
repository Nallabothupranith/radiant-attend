import Navigation from "@/components/student/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, CheckCircle, AlertCircle, Send, User } from "lucide-react";
import { useState } from "react";

const CounselingRequest = () => {
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("");

  const existingRequests = [
    {
      id: 1,
      type: "Academic",
      subject: "Struggling with Data Structures",
      message: "I'm having trouble understanding advanced tree algorithms...",
      date: "2024-01-28",
      status: "in-progress",
      counselor: "Dr. Sarah Johnson",
      response: "I've reviewed your concern. Let's schedule a meeting this week to go through the concepts step by step."
    },
    {
      id: 2,
      type: "Personal",
      subject: "Time Management Issues",
      message: "Finding it hard to balance studies with part-time work...",
      date: "2024-01-25",
      status: "completed",
      counselor: "Ms. Emily Chen",
      response: "Great progress on implementing the study schedule we discussed!"
    },
    {
      id: 3,
      type: "Academic",
      subject: "Low Attendance Concern",
      message: "Need guidance on improving attendance without affecting my part-time job...",
      date: "2024-01-20",
      status: "pending",
      counselor: "Pending Assignment"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "in-progress":
        return <AlertCircle className="h-4 w-4 text-primary" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "warning";
      case "in-progress":
        return "default";
      case "completed":
        return "success";
      default:
        return "secondary";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ issueType, message, priority });
    // Reset form
    setIssueType("");
    setMessage("");
    setPriority("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Counseling Center</h1>
          <p className="text-muted-foreground">Get academic and personal support from our counseling team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Request Form */}
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                New Counseling Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="issue-type">Issue Type</Label>
                    <Select value={issueType} onValueChange={setIssueType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic Support</SelectItem>
                        <SelectItem value="personal">Personal Guidance</SelectItem>
                        <SelectItem value="financial">Financial Assistance</SelectItem>
                        <SelectItem value="career">Career Counseling</SelectItem>
                        <SelectItem value="mental-health">Mental Health Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select value={priority} onValueChange={setPriority}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General guidance</SelectItem>
                        <SelectItem value="medium">Medium - Need support soon</SelectItem>
                        <SelectItem value="high">High - Urgent assistance needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject/Title</Label>
                  <Input 
                    id="subject"
                    placeholder="Brief description of your concern"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Detailed Message</Label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe your situation in detail. The more information you provide, the better we can assist you."
                    rows={6}
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    type="submit" 
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80"
                  >
                    <Send className="h-4 w-4" />
                    Submit Request
                  </Button>
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Submit Request</div>
                    <div className="text-xs text-muted-foreground">
                      Fill out the form with your concern
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Assignment</div>
                    <div className="text-xs text-muted-foreground">
                      A counselor will be assigned within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Support</div>
                    <div className="text-xs text-muted-foreground">
                      Get personalized guidance and support
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                    <div className="font-semibold text-destructive text-sm">Crisis Hotline</div>
                    <div className="text-sm">1-800-CRISIS-1</div>
                    <div className="text-xs text-muted-foreground">24/7 immediate support</div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="font-semibold text-primary text-sm">Campus Security</div>
                    <div className="text-sm">(555) 123-SAFE</div>
                    <div className="text-xs text-muted-foreground">Emergency assistance</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Existing Requests */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle>Your Counseling History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {existingRequests.map((request) => (
                <div key={request.id} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(request.status)}
                        <Badge variant={getStatusColor(request.status) as any}>
                          {request.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{request.date}</div>
                    </div>
                    <Badge variant="outline">{request.type}</Badge>
                  </div>
                  
                  <h4 className="font-semibold mb-2">{request.subject}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{request.message}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Counselor:</span>
                      <span className="font-medium">{request.counselor}</span>
                    </div>
                    {request.status === "completed" && (
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    )}
                  </div>
                  
                  {request.response && (
                    <div className="mt-3 p-3 rounded-lg bg-muted/30">
                      <div className="text-sm font-medium mb-1">Counselor Response:</div>
                      <div className="text-sm text-muted-foreground">{request.response}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CounselingRequest;
